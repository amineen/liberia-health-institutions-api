const mongoose = require('mongoose');

const HealthFacilitySchema = new mongoose.Schema({
    countyName:{
        type:String,
        required:[true, 'Please add the county name'],
        trim:true,
        maxlength:[20, 'County name must be less than 20 characters']
    },
    districtName:{
        type:String,
        trim:true,
        maxlength:[25, 'district name must be less than 25 characters']
    },
    facilityType:{
        type:String,
        required:[true, 'Please add facility type'],
        trim:true,
        maxlength:[10, 'Facility Type must be less than 10 characters']
    },
    facilityCode:{
        type:String,
        required:[true, 'Please add the facility code'],
        unique:true,
        trim:true,
        maxlength:[12, 'Facility code must be less than 12 characters']
    },
    facilityName:{
        type:String,
        required:[true, 'Please add the facility name'],
        trim:true,
        maxlength:[40, 'Facility name must be less than 40 characters']
    },
    lmepHealth:{
        type:String,
        trim:true,
        maxlength:[20, 'lmepHealth must be less than 20 characters']
    },
    LmepCtyCode:{
        type:String,
        trim:true,
        maxlength:[20, 'LmepCtyCode must be less than 20 characters']
    },
    lmepDistCode:{
        type:String,
        trim:true,
        maxlength:[20, 'lmepDistCode must be less than 20 characters']
    },
    location: {
        type: {
          type: String,
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          required: true,
          index:'2dsphere'
        }
      }
});

module.exports = mongoose.model('Health-Facility', HealthFacilitySchema);