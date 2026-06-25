---
type: Model
title: Gemini 3.1 Pro Preview
creator: Google
license: Proprietary
intelligence_index: 46.0
price_blended_usd_1m: 1.74
output_speed_tps: 138.0
context_window: 1000000
radar:
  knowledge: { s: 91.4, z: 1.8, r: 77.0, estimated: false }  # 전문 지식
  reasoning: { s: 80.9, z: 1.71, r: 75.7, estimated: false }  # 추론
  coding: { s: 94.1, z: 1.5, r: 72.5, estimated: false }  # 코딩
  agentic: { s: 64.9, z: 0.51, r: 57.7, estimated: false }  # 에이전트
  trust: { s: 57.5, z: 0.84, r: 62.5, estimated: false }  # 신뢰성
  multimodal: { s: 96.6, z: 1.1, r: 66.4, estimated: false }  # 멀티모달
  long_context: { s: 98.6, z: 1.0, r: 65.0, estimated: false }  # 긴문맥
  instruction: { s: 91.5, z: 1.03, r: 65.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.1 Pro Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-25
timestamp: 2026-06-25T00:00:00Z
---

# Gemini 3.1 Pro Preview

Google · Proprietary · 컨텍스트 1M · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 138.0 t/s · TTFT 34.71s · 1M ctx` · 가성비 26.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.0 | +1.8 | 실측 | [[aa-omniscience]] 55.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 45.0%×0.3 |
| 추론 | 75.7 | +1.71 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 45.0%×1.0 |
| 코딩 | 72.5 | +1.5 | 실측 | [[scicode]] 59.0%×1.0, [[terminal-bench]] 54.0%×0.5 |
| 에이전트 | 57.7 | +0.51 | 실측 | [[apex-agents]] 32.0%×1.0, [[gdpval]] 23.0%×1.0, [[itbench]] 30.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 16.0%×1.0, [[terminal-bench]] 54.0%×1.0 |
| 신뢰성 | 62.5 | +0.84 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | 66.4 | +1.1 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 65.0 | +1.0 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 65.4 | +1.03 | 실측 | [[ifbench]] 77.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
