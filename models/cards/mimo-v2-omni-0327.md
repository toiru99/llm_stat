---
type: Model
title: MiMo-V2-Omni-0327
creator: Xiaomi
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.5, z: 0.71, r: 60.7, estimated: false }  # 전문 지식
  reasoning: { s: 61.9, z: 0.73, r: 61.0, estimated: false }  # 추론
  coding: { s: 54.5, z: 0.59, r: 58.8, estimated: false }  # 코딩
  agentic: { s: 54.5, z: 0.7, r: 60.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 80.8, z: 0.43, r: 56.5, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 0.89, r: 63.4, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.03, r: 65.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Omni-0327
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# MiMo-V2-Omni-0327

Xiaomi · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.7 | +0.71 | 실측 | [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 61.0 | +0.73 | 실측 | [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 58.8 | +0.59 | 실측 | [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 60.5 | +0.7 | 실측 | [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.5 | +0.43 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 63.4 | +0.89 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 65.5 | +1.03 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
