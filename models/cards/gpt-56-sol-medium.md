---
type: Model
title: GPT-5.6 Sol (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 54.0
price_blended_usd_1m: 4.35
output_speed_tps: 63.0
context_window: 1000000
radar:
  knowledge: { s: 91.4, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 81.9, z: 1.48, r: 72.2, estimated: false }  # 추론
  coding: { s: 94.0, z: 1.32, r: 69.8, estimated: false }  # 코딩
  agentic: { s: 85.0, z: 1.22, r: 68.3, estimated: false }  # 에이전트
  trust: { s: 11.2, z: -0.69, r: 39.6, estimated: false }  # 신뢰성
  multimodal: { s: 94.8, z: 0.88, r: 63.2, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 0.72, r: 60.8, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 0.55, r: 58.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# GPT-5.6 Sol (medium)

OpenAI · Proprietary · 컨텍스트 1M · 종합지능 **54.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 63.0 t/s · TTFT 4.04s · 1M ctx` · 가성비 12.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.4 | +1.56 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 72.2 | +1.48 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 69.8 | +1.32 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 63.0%×0.5 |
| 에이전트 | 68.3 | +1.22 | 실측 | [[gdpval]] 53.0%×1.0, [[tau2-bench]] 81.0%×1.0, [[tau3-banking]] 26.0%×1.0, [[terminal-bench]] 63.0%×1.0 |
| 신뢰성 | 39.6 | -0.69 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 63.2 | +0.88 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 60.8 | +0.72 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 58.2 | +0.55 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
