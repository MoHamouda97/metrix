declare function steps(): void;
declare function next(): void;
declare function previous(): void;


/**
 * This function is used to call steps function from script.js file
 */
export function applySteps() {
    steps();
}

/**
 * This function is used to call next function from script.js file
 */
export function applyNext() {
    next();
}

/**
 * This function is used to call previous function from script.js file
 */
export function applyPrevious() {
    previous();
}