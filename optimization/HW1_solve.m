% HW1_solve.m
% MAT3007 Homework 1 -- solve P1(d), P3(b), P4 with a pure-MATLAB
% two-phase simplex method. NO toolbox required.
% Run the whole script (press F5). The results are printed to the
% command window.

%% ============ Problem 1(d): production ============
% maximize 7.8 x1 + 7.1 x2  <=>  minimize -7.8 x1 - 7.1 x2
f = [-7.8; -7.1];
A = [1/8, 1/4;  1/2, 1/6];
b = [90; 80];
lb = [0; 0];
[x, fval] = my_linprog(f, A, b, [], [], lb, []);
fprintf('P1(d): x1 = %.4f, x2 = %.4f, profit = %.4f\n', x(1), x(2), -fval);

%% ============ Problem 3: transportation ============
present = [110 335 400 420 610];
need    = [150 200 600 200 390];
s = present - need;            % surplus = [-40, 135, -200, 220, 220]

cost = [0 20 13 11 28;
        20 0 18 8 46;
        13 18 0 9 27;
        11 8 9 0 20;
        28 46 27 20 0];

nVar = 5*4;                    % 20 variables x_ij (i ~= j)
f = zeros(nVar,1);
A = zeros(5,nVar);
varMap = zeros(nVar,2);        % record (i,j) of the k-th variable
k = 0;
for i = 1:5
    for j = 1:5
        if i ~= j
            k = k + 1;
            varMap(k,:) = [i j];
            f(k) = cost(i,j);
            A(i,k) =  1;       % outflow from i
            A(j,k) = -1;       % inflow to j
        end
    end
end
lb = zeros(nVar,1);
[x, fval] = my_linprog(f, A, s', [], [], lb, []);
fprintf('\nP3: optimal value = %.4f\n', fval);
for k = 1:nVar
    if x(k) > 1e-6
        fprintf('  x[%d -> %d] = %.4f\n', varMap(k,1), varMap(k,2), x(k));
    end
end

%% ============ Problem 4: shortest path ============
M = 100;
W = [M, 5, 4, M, M, M, M, M;
     5, M, M, 3, M, 7, M, M;
     4, M, M, M, 1, 2, M, M;
     M, 3, M, M, 2, M, M, M;
     M, M, 1, 2, M, M, 2, 5;
     M, 7, 2, M, M, M, M, 3;
     M, M, M, M, 2, M, M, 1;
     M, M, M, M, 5, 3, 1, M];

n = 8;
nVar = n*(n-1);                % 56 variables x_ij (i ~= j)
f = zeros(nVar,1);
Aeq = zeros(n,nVar);
varMap = zeros(nVar,2);
k = 0;
for i = 1:n
    for j = 1:n
        if i ~= j
            k = k + 1;
            varMap(k,:) = [i j];
            f(k) = W(i,j);
            Aeq(i,k) =  1;     % outflow
            Aeq(j,k) = -1;     % inflow
        end
    end
end
beq = zeros(n,1);
beq(1) = 1;  beq(n) = -1;     % source sends 1, terminal receives 1

lb = zeros(nVar,1);
ub = ones(nVar,1);             % relax the binary constraint to 0 <= x <= 1

[x, fval] = my_linprog(f, [], [], Aeq, beq, lb, ub);
fprintf('\nP4: optimal value = %.4f\n', fval);
fprintf('Edges on the optimal path:\n');
for k = 1:nVar
    if x(k) > 1e-6
        fprintf('  %d -> %d  (w = %d)\n', varMap(k,1), varMap(k,2), W(varMap(k,1),varMap(k,2)));
    end
end


%% ================= local functions (no toolbox needed) =================

function [x, fval] = my_linprog(f, A, b, Aeq, beq, lb, ub)
% MY_LINPROG  min f'x  s.t. A x <= b, Aeq x = beq, lb <= x <= ub.
% Pure MATLAB two-phase simplex. Interface mirrors linprog.
    f = f(:);
    n = numel(f);
    if isempty(A),   A = zeros(0,n); end
    if isempty(b),   b = zeros(0,1); end
    if isempty(Aeq), Aeq = zeros(0,n); end
    if isempty(beq), beq = zeros(0,1); end
    if nargin < 7 || isempty(lb), lb = zeros(n,1); end
    if nargin < 8 || isempty(ub), ub = inf(n,1);  end

    lb = lb(:); ub = ub(:); b = b(:); beq = beq(:);

    % shift x = lb + y so that y >= 0
    shift = lb;
    b   = b   - A*shift;
    beq = beq - Aeq*shift;
    ub  = ub  - shift;

    % inequalities: A*y <= b, plus y <= ub for finite upper bounds
    A_ineq = A;  b_ineq = b;
    fin = find(isfinite(ub));
    if ~isempty(fin)
        Aub = zeros(numel(fin), n);
        for t = 1:numel(fin)
            Aub(t, fin(t)) = 1;
        end
        A_ineq = [A_ineq; Aub];
        b_ineq = [b_ineq; ub(fin)];
    end

    m_ineq = size(A_ineq,1);
    m_eq   = size(Aeq,1);

    % standard form: [A_ineq | I] z = b_ineq ; [Aeq | 0] z = beq
    As   = [A_ineq, eye(m_ineq)];
    Aeq2 = [Aeq, zeros(m_eq, m_ineq)];
    Aall = [As; Aeq2];
    ball = [b_ineq; beq];
    c_ext = [f; zeros(m_ineq,1)];

    [z, fval0] = simplex2phase(c_ext, Aall, ball);
    y = z(1:n);
    x = y + shift;
    fval = fval0 + f'*shift;
end

function [x, fval] = simplex2phase(c, A, b)
% Two-phase simplex: min c'x s.t. A x = b, x >= 0 (Bland's rule).
    c = c(:)';  A = double(A);  b = b(:)';
    [m, n] = size(A);
    tol = 1e-12;
    for i = 1:m
        if b(i) < 0
            A(i,:) = -A(i,:);  b(i) = -b(i);
        end
    end

    % Phase I tableau: [A | I | b], artificial objective = sum of artificials
    T = zeros(m+1, n+m+1);
    T(1:m, 1:n) = A;
    T(1:m, n+1:n+m) = eye(m);
    T(1:m, end) = b';
    T(m+1, n+1:n+m) = 1;
    T(m+1, :) = T(m+1,:) - sum(T(1:m,:), 1);
    basis = (n+1):(n+m);

    [T, basis] = run_simplex(T, basis, m, n+m);
    if abs(T(m+1, end)) > 1e-6
        error('LP is infeasible');
    end

    % Phase II: drop artificial columns, restore original objective c
    T2 = zeros(m+1, n+1);
    T2(1:m, 1:n) = T(1:m, 1:n);
    T2(1:m, end) = T(1:m, end);
    T2(m+1, 1:n) = c;

    % drive any artificial basic variable (value 0) out of the basis
    for i = 1:m
        if basis(i) > n
            piv = 0;
            for j = 1:n
                if abs(T2(i,j)) > tol
                    piv = j; break;
                end
            end
            if piv > 0
                T2(i,:) = T2(i,:) / T2(i,piv);
                for k = 1:m+1
                    if k ~= i
                        T2(k,:) = T2(k,:) - T2(k,piv)*T2(i,:);
                    end
                end
                basis(i) = piv;
            end
        end
    end
    for i = 1:m
        if basis(i) <= n
            T2(m+1,:) = T2(m+1,:) - c(basis(i))*T2(i,:);
        end
    end

    [T2, basis] = run_simplex(T2, basis, m, n);

    x = zeros(n,1);
    for i = 1:m
        if basis(i) <= n
            x(basis(i)) = T2(i, end);
        end
    end
    fval = -T2(m+1, end);
end

function [T, basis] = run_simplex(T, basis, m, ncols)
% One simplex loop (Bland's rule for entering, min-ratio for leaving).
    tol = 1e-12;
    while true
        enter = 0;
        for j = 1:ncols
            if T(m+1, j) < -tol
                enter = j; break;
            end
        end
        if enter == 0, break; end

        leave = 0; best = inf;
        for i = 1:m
            if T(i, enter) > tol
                r = T(i, end) / T(i, enter);
                if r < best - tol
                    best = r; leave = i;
                end
            end
        end
        if leave == 0, error('LP is unbounded'); end

        T(leave,:) = T(leave,:) / T(leave, enter);
        for i = 1:m+1
            if i ~= leave
                T(i,:) = T(i,:) - T(i, enter)*T(leave,:);
            end
        end
        basis(leave) = enter;
    end
end
