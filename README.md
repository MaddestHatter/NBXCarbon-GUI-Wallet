# NBX-Windows-GUI
NBXleather GUI for Windows
NBXleather wallet
Features:

This wallet contains the basic functions required to manage your NibbleClassic assets:

    Wallet creation
        Create new wallet
        Import from private keys
        Import from mnemonic seed
    Basic wallet operation
        Open an existing wallet
        Display wallet address & balance
        Display private keys/seed
        Export private keys/seed
        Transactions listing/sorting/searching
        Display transaction detail
        Export incoming, outgoing, or all transactions to csv file.
        Incoming Transaction notification
        Send NibbleClassic to single recipient address, allow to set payment id and custom fee. Provides address lookup from addressbook.
        Perform wallet optimization by creating fusion transactions
        Provides utility to generate payment id and integrated address
    Address book
        Add/Edit/Delete address entry (label/name, address and payment id)
        Listing/sorting/searching existing entries
        Allow to store same wallet address with different payment id
        Autosave address after sending to new/unknown recipient
    Misc
        Provides setting to set local or public node address
        Option to use system tray (on closing/minimizing wallet)
        Custom node address that is not on the list will be added/remembered for future use
        Theme: Dark & Light Mode
        Keyboard shortcuts

Notes

NBXleather relies on nibble-service to manage wallet container & rpc communication.

On first launch, WalletShell will try to detect location/path of bundled nibble-service binary, but if it's failed, you can manually set path to the nibble-service binary on the Settings screen.
Download & Run NBXleather


    Run ./Nibbled by locating the app in your NBX directory and double clicking, then Run the NBXleather file by double clicking the app
    Daemon or public node address needs setting as 127.0.0.1 and Daemon/node port set as 17122

See: https://docs.appimage.org/user-guide/run-appimages.html
