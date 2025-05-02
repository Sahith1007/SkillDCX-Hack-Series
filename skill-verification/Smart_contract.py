from algopy import *

class SkillCertificate(ARC4Contract):
    def __init__(self) -> None:
        self.admin = Arc4Address()
        self.asset_id = Arc4Uint64()
        self.ipfs_metadata_url = Arc4String()

    @arc4.abimethod
    def deploy_certificate(self, admin: abi.Address, ipfs_metadata_url: abi.String) -> abi.Uint64:
        """Deploys ASA Skill Certificate with ARC-3 Metadata"""
        self.admin.set(admin)
        self.ipfs_metadata_url.set(ipfs_metadata_url)

        asa = gtxn.AssetConfigTxn(
            sender=Txn.sender,
            total=1,
            decimals=0,
            default_frozen=False,
            unit_name="SDCX",
            asset_name="SkillDCX Certificate",
            url=Concat(ipfs_metadata_url.get(), Bytes("#arc3")),
            metadata_hash=EmptyBytes(),
            manager=admin,
            reserve=admin,
            freeze=admin,
            clawback=admin,
        )

        self.asset_id.set(asa.asset_id())
        return self.asset_id.get()

    @arc4.abimethod
    def get_certificate_id(self) -> abi.Uint64:
        return self.asset_id.get()

    @arc4.abimethod
    def get_metadata_url(self) -> abi.String:
        return self.ipfs_metadata_url.get()
