//
//App paths
//

export const pathsPublic: {[k:string]:string} = {
    home:'/',
    productDetails:'/product/:idOrSlug',
}

export const pathsPrivate:{ [k:string]:string } = {
    accountSettings:'/account-settings',
}

export const paths: { [k:string]:string } = Object.assign({}, pathsPublic, pathsPrivate)

//
//Check if pathname matches to one of the given key from paths argument
//

export const checkPathMatch = (
    pathName:string,
    paths: { [k:string]:string }, 
) => {
    let isMatch = false

    const allPaths = Object.keys(paths).map((k) => paths[k])
    const pathFirstSection = pathName.split('/')[1]

    allPaths.forEach((p) => {
        if(p.slice(1) === pathFirstSection) isMatch=true
    })
    return isMatch
}
