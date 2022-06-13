const importIcons = (value) => {
    return require(`./navAssets/${value}-icon.svg`);
}

export const assets = {
    logoIcon: importIcons('logo'),
    logoPutihIcon: importIcons('logo-putih'),
    logoTextIcon: importIcons('logo-text'),
    hamburgerMenuIcon: importIcons('hamburger-menu'),
    hamburderCloseIcon: importIcons('hamburger-close'),
    dashboardIcon: importIcons('dashboard'),
    dashboardInactiveIcon: importIcons('dashboard-inactive'),
    menuIcon: importIcons('menu'),
    menuInactiveIcon: importIcons('menu-inactive'),
    merchantIcon: importIcons('merchant'),
    merchantInactiveIcon: importIcons('merchant-inactive'),
    reportsIcon: importIcons('reports'),
    reportsInactiveIcon: importIcons('reports-inactive'),
    lockIcon: importIcons('lock'),
    userIcon: importIcons('user'),
    eyeIcon: importIcons('eye'),
    eyeOffIcon: importIcons('eye-off'),
    mailIcon: importIcons('mail'),
    logOutIcon: importIcons('log-out'),
    
    defaultPlaceholder: require('./../../products/images/default-placeholder.png')
}