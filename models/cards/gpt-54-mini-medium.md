---
type: Model
title: GPT-5.4 mini (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.6525
output_speed_tps: 129.948488816828
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.2, z: 0.52, r: 57.9, estimated: false }  # 전문 지식
  reasoning: { s: 38.6, z: 0.15, r: 52.2, estimated: false }  # 추론
  coding: { s: 51.7, z: 0.4, r: 55.9, estimated: false }  # 코딩
  agentic: { s: 44.3, z: -0.02, r: 49.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 75.6, z: 0.21, r: 53.2, estimated: false }  # 멀티모달
  long_context: { s: 75.6, z: 0.65, r: 59.8, estimated: false }  # 긴문맥
  instruction: { s: 73.9, z: 0.84, r: 62.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# GPT-5.4 mini (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.6525/1M · 129.948488816828 t/s · TTFT 4.65007330576665s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.9 | +0.52 | 실측 | [[gpqa-diamond]] 82.3232323232323%×0.4, [[humanitys-last-exam]] 18.5820203892493%×0.3 |
| 추론 | 52.2 | +0.15 | 실측 | [[critpt]] 2.85714285714286%×1.0, [[gpqa-diamond]] 82.3232323232323%×1.0, [[humanitys-last-exam]] 18.5820203892493%×1.0 |
| 코딩 | 55.9 | +0.4 | 실측 | [[terminal-bench]] 34.0909090909091%×0.5 |
| 에이전트 | 49.7 | -0.02 | 실측 | [[tau2-bench]] 36.5497076023392%×1.0, [[terminal-bench]] 34.0909090909091%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 53.2 | +0.21 | 실측 | [[mmmu-pro]] 71.1560693641618%×1.0 |
| 긴문맥 | 59.8 | +0.65 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 62.6 | +0.84 | 실측 | [[ifbench]] 64.7619047619048%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
