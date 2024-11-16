import React from 'react';
import '../../styles/Seperator.css';
import { ReactComponent as Group } from '../../assets/images/separetor/Group.svg';
import { ReactComponent as Group1 } from '../../assets/images/separetor/Group-1.svg';
import { ReactComponent as Group2 } from '../../assets/images/separetor/Group-2.svg';
import { ReactComponent as Group3 } from '../../assets/images/separetor/Group-3.svg';

export default function Seperator() {
    return (
        <div className='container-fluid'>
            <div className='row mt-5 mx-2'>
                <div className='col-md-12 text-center'>
                    <div className='row'>
                        <div className='col-md-3 col-sm-6'>
                            <div className="sep-container">
                                <Group className='sep-img inline-block' />
                                <div className='sep-text'>Natural Ingredients</div>
                                <div className='sep-subtext'>
                                    Nurtured By Nature, Crafted For You
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <div className="sep-container">
                                <Group1 className='sep-img' />
                                <div className='sep-text'>Fragrance Free</div>
                                <div className='sep-subtext'>
                                    Free From Artificial Scents
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <div className="sep-container">
                                <Group2 className='sep-img' />
                                <div className='sep-text'>Allergy Tested</div>
                                <div className='sep-subtext'>
                                    Crafted For Comfort And Confidence
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <div className="sep-container">
                                <Group3 className='sep-img' />
                                <div className='sep-text'>Paraben Free</div>
                                <div className='sep-subtext'>
                                    Kind To Skin, Kind To Nature
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
