---
type: Model
title: MiMo-V2-Omni
creator: Xiaomi
license: Proprietary
intelligence_index: 24.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.8, z: 0.02, r: 50.4, estimated: false }  # 전문 지식
  reasoning: { s: 41.0, z: 0.22, r: 53.3, estimated: false }  # 추론
  coding: { s: 53.0, z: 0.59, r: 58.8, estimated: false }  # 코딩
  agentic: { s: 72.5, z: 1.31, r: 69.6, estimated: false }  # 에이전트
  trust: { s: 50.5, z: 1.14, r: 67.0, estimated: false }  # 신뢰성
  multimodal: { s: 75.3, z: 0.22, r: 53.4, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.0, r: 65.0, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: 0.22, r: 53.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Omni
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# MiMo-V2-Omni

Xiaomi · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **24.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.4 | +0.02 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 53.3 | +0.22 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 58.8 | +0.59 | 실측 | [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 69.6 | +1.31 | 실측 | [[tau2-bench]] 91.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 67.0 | +1.14 | 실측 | [[aa-omniscience]] 51.0%×1.0 |
| 멀티모달 | 53.4 | +0.22 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 65.0 | +1.0 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 53.3 | +0.22 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
