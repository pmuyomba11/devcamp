//  @Desc  Get all BootCamps
//  @Route  GET /api/v1/bootcamps
//  @Access Public

exports.getBootcamps = (req,res,next) => {
    res.status(200).json({status: 'Success', msg: 'Show all bootcamps'})
}

//  @Desc  Get a Single BootCamp
//  @Route  GET /api/v1/bootcamps/:id
//  @Access Public

exports.getBootcamp = (req,res,next) => {
    res.status(200).json({status: 'Success', msg: `Show Single BootCamp at ${req.params.id}`})
}

// @Desc Create new BootCamp
// @Route POST /api/v1/bootcamps
//@access Private

exports.createBootcamp = (req,res,next) => {
    res.status(200).json({status: 'Success', msg: 'Create Bootcamp'})
}


// @Desc Update BootCamp
// @Route PUT /api/v1/bootcamps/:id
//@access Private

exports.updateBootcamp = (req,res,next) => {
    res.status(200).json({status: 'Success', msg: `Update BootCamp at ${req.params.id}`})
}


// @Desc Delete BootCamp
// @Route DELETE /api/v1/bootcamps/:id
//@access Private

exports.deleteBootcamp = (req,res,next) => {
    res.status(200).json({status: 'Success', msg: `Delete BootCamp at ${req.params.id}`})
}