paypal.Buttons({
    style: {
        shape: 'pill',
        color: 'blue',
        layout: 'vertical',
        label: 'subscribe'
    },
    createSubscription: function(data, actions) {
    return actions.subscription.create({
        /* Creates the subscription */
        plan_id: 'P-0YR83984EM583654NMYXOV6A'
    });
    },
    onApprove: function(data, actions) {
    alert(data.subscriptionID); // You can add optional success message for the subscriber here
    }
}).render('#paypal-button-container-P-0YR83984EM583654NMYXOV6A'); // Renders the PayPal button