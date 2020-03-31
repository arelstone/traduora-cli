module.exports = {
    'roots': [
        '<rootDir>/src'
    ],
    'testMatch': [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    'transform': {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    'automock': false,
    'setupFiles': [
        '<rootDir>/.jest/jest.mocks.ts',
        'dotenv/config',

    ]
}
