---
type: Model
title: GPT-5.5 (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 4.35
output_speed_tps: 71.0
context_window: 922000
radar:
  knowledge: { s: 90.7, z: 1.78, r: 76.8, estimated: false }  # 전문 지식
  reasoning: { s: 79.0, z: 1.64, r: 74.6, estimated: false }  # 추론
  coding: { s: 89.6, z: 1.31, r: 69.6, estimated: false }  # 코딩
  agentic: { s: 83.3, z: 1.25, r: 68.8, estimated: false }  # 에이전트
  trust: { s: 12.5, z: -0.73, r: 39.0, estimated: false }  # 신뢰성
  multimodal: { s: 94.8, z: 1.0, r: 64.9, estimated: false }  # 멀티모달
  long_context: { s: 97.3, z: 0.96, r: 64.3, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 0.68, r: 60.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-30
timestamp: 2026-06-30T00:00:00Z
---

# GPT-5.5 (medium)

OpenAI · Proprietary · 컨텍스트 922k · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 71.0 t/s · TTFT 5.73s · 922k ctx` · 가성비 11.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.8 | +1.78 | 실측 | [[aa-omniscience]] 56.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 74.6 | +1.64 | 실측 | [[critpt]] 19.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 69.6 | +1.31 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 68.8 | +1.25 | 실측 | [[gdpval]] 43.0%×1.0, [[tau2-bench]] 92.0%×1.0, [[tau3-banking]] 26.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 39.0 | -0.73 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | 64.9 | +1.0 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 64.3 | +0.96 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 60.2 | +0.68 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
