pragma solidity >=0.5.0;

interface IEvoCallee {
    function evoBorrow(
        address sender,
        address borrower,
        uint256 borrowAmount,
        bytes calldata data
    ) external;

    function evoRedeem(
        address sender,
        uint256 redeemAmount,
        bytes calldata data
    ) external;
}
