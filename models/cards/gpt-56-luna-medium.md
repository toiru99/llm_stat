---
type: Model
title: GPT-5.6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.174
output_speed_tps: 103.181636069304
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.7, z: 0.84, r: 62.6, estimated: false }  # 전문 지식
  reasoning: { s: 45.1, z: 0.47, r: 57.0, estimated: false }  # 추론
  coding: { s: 65.5, z: 0.86, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 51.1, z: 0.21, r: 53.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.8, z: 0.53, r: 58.0, estimated: false }  # 멀티모달
  long_context: { s: 84.6, z: 0.92, r: 63.8, estimated: false }  # 긴문맥
  instruction: { s: 83.2, z: 1.23, r: 68.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# GPT-5.6 Luna (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 103.181636069304 t/s · TTFT 2.51746328795358s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.6 | +0.84 | 실측 | [[gpqa-diamond]] 85.8585858585859%×0.4, [[humanitys-last-exam]] 25.7645968489342%×0.3 |
| 추론 | 57.0 | +0.47 | 실측 | [[critpt]] 4.857142857142859%×1.0, [[gpqa-diamond]] 85.8585858585859%×1.0, [[humanitys-last-exam]] 25.7645968489342%×1.0 |
| 코딩 | 63.0 | +0.86 | 실측 | [[scicode]] 46.7592592592593%×1.0 |
| 에이전트 | 53.2 | +0.21 | 실측 | [[gdpval]] 1137.36%×1.0, [[tau3-banking]] 17.7319587628866%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.0 | +0.53 | 실측 | [[mmmu-pro]] 75.8381502890173%×1.0 |
| 긴문맥 | 63.8 | +0.92 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 68.4 | +1.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
