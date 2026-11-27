// Define union types AccountStatus and UserRole, and an interface TestUser containing...

type UserRole = 'admin' | 'user' | 'guest';
type AccountStatus = 'active' | 'inactive' | 'suspended';

interface TestUser {
    readonly id : string;
    email: string;
    role: UserRole;
    status: AccountStatus;
    mfaEnabled?: boolean;
} 

// Define a function that takes a TestUser object and returns a string message based on the user's role and account status.

function createTestUser (
    email: string,
    role: UserRole,
): TestUser {
    return {
        id: "USR001",
        email: email,
        role: role,
        status: 'active',
        
    } ;
} 

const adminUser = createTestUser(
    "admin@test.com",
    "admin"
); 

console.log(adminUser);