---
type: Model
title: GPT-5 (minimal)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: 70.981608971523
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.9, z: -0.31, r: 45.3, estimated: false }  # 전문 지식
  reasoning: { s: 24.4, z: -0.55, r: 41.7, estimated: false }  # 추론
  coding: { s: 27.6, z: -0.42, r: 43.7, estimated: false }  # 코딩
  agentic: { s: 47.6, z: 0.09, r: 51.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.5, z: -0.41, r: 43.9, estimated: false }  # 멀티모달
  long_context: { s: 50.1, z: -0.11, r: 48.4, estimated: true }  # 긴문맥
  instruction: { s: 47.0, z: -0.29, r: 45.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# GPT-5 (minimal)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 코딩, 추론

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 70.981608971523 t/s · TTFT 2.08629424098031s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.3 | -0.31 | 실측 | [[gpqa-diamond]] 67.2727272727273%×0.4, [[humanitys-last-exam]] 6.02409638554217%×0.3 |
| 추론 | 41.7 | -0.55 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.2727272727273%×1.0, [[humanitys-last-exam]] 6.02409638554217%×1.0 |
| 코딩 | 43.7 | -0.42 | 실측 | [[terminal-bench]] 18.181818181818198%×0.5 |
| 에이전트 | 51.4 | +0.09 | 실측 | [[tau2-bench]] 66.9590643274854%×1.0, [[terminal-bench]] 18.181818181818198%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 43.9 | -0.41 | 실측 | [[mmmu-pro]] 62.080924855491304%×1.0 |
| 긴문맥 | 48.4 | -0.11 | 추정 | (추정) |
| 지시 따르기 | 45.7 | -0.29 | 실측 | [[ifbench]] 45.578231292517%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
