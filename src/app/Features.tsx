"use client";

import { HStack , Icon , Text , StackProps, Box , Stack} from "@chakra-ui/react";
import React, { ElementType } from "react";
import {MoneyBackGuaranteeIcon , HazzleFreeIcon , MonthlySubscriptionIcon} from "./icon/icon";

interface FeatureProps extends StackProps{
    icon:ElementType;
}
 function Feature(props:FeatureProps){
    const {icon , children , ...rest} = props;
    return(
        <HStack {...rest} spacing={"6"}>
           <Icon as={icon} boxSize={["8","8","12"]}/>
           <Text textAlign={"left"} fontSize={"lg"} fontWeight={"bold"}>{children}</Text>
        </HStack>
    )
}
export default function Features(){
    return(
        <Box maxW={"1024px"} m={"auto"} pt={"60px"} pb={"8"}>
        <Stack px={"12"} spacing={["6","6","5"]}
        direction={["column","column","row"]}>
            <Feature icon={MoneyBackGuaranteeIcon}>30 days money back Guarantee</Feature>
            <Feature icon={HazzleFreeIcon}>No setup fees 100% hassle-free</Feature>
            <Feature icon={MonthlySubscriptionIcon}>No monthly subscription Pay once and for all</Feature>
        </Stack>
        </Box>
    )
}