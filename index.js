
var watchForChanges = function () {
    console.log('Integration start!');

    // Select the node that will be observed for mutations
    const targetNode = document.querySelectorAll('.wrapper')[0]

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = function () {
        evolv?.rerun();
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    // Later, you can stop observing
    // observer.disconnect();
}

module.exports = function (config) {
    watchForChanges();
}
