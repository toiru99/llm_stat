---
type: Model
title: GPT-5.5 (high)
creator: OpenAI
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 4.35
output_speed_tps: 67.0
context_window: 922000
radar:
  knowledge: { s: 91.4, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 85.9, z: 1.66, r: 74.9, estimated: false }  # 추론
  coding: { s: 92.5, z: 1.25, r: 68.8, estimated: false }  # 코딩
  agentic: { s: 87.6, z: 1.32, r: 69.8, estimated: false }  # 에이전트
  trust: { s: 12.5, z: -0.65, r: 40.3, estimated: false }  # 신뢰성
  multimodal: { s: 94.8, z: 0.88, r: 63.2, estimated: false }  # 멀티모달
  long_context: { s: 98.6, z: 0.92, r: 63.8, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 0.68, r: 60.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# GPT-5.5 (high)

OpenAI · Proprietary · 컨텍스트 922k · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 67.0 t/s · TTFT 23.29s · 922k ctx` · 가성비 12.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.4 | +1.56 | 실측 | [[aa-omniscience]] 56.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 74.9 | +1.66 | 실측 | [[critpt]] 25.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 68.8 | +1.25 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 60.0%×0.5 |
| 에이전트 | 69.8 | +1.32 | 실측 | [[gdpval]] 49.0%×1.0, [[tau2-bench]] 93.0%×1.0, [[tau3-banking]] 29.0%×1.0, [[terminal-bench]] 60.0%×1.0 |
| 신뢰성 | 40.3 | -0.65 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | 63.2 | +0.88 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 63.8 | +0.92 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 60.2 | +0.68 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
