---
type: Model
title: Gemini 3.5 Flash
creator: Google
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 1.31
output_speed_tps: 191.0
context_window: 1000000
radar:
  knowledge: { s: 86.5, z: 1.58, r: 73.7, estimated: false }  # 전문 지식
  reasoning: { s: 72.1, z: 1.3, r: 69.5, estimated: false }  # 추론
  coding: { s: 80.6, z: 0.91, r: 63.7, estimated: false }  # 코딩
  agentic: { s: 81.4, z: 1.16, r: 67.4, estimated: false }  # 에이전트
  trust: { s: 43.8, z: 0.35, r: 55.3, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.27, r: 69.0, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 0.81, r: 62.1, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 0.97, r: 64.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-25
timestamp: 2026-06-25T00:00:00Z
---

# Gemini 3.5 Flash

Google · Proprietary · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.31/1M · 191.0 t/s · TTFT 21.32s · 1M ctx` · 가성비 38.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.7 | +1.58 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 69.5 | +1.3 | 실측 | [[critpt]] 13.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 63.7 | +0.91 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 41.0%×0.5 |
| 에이전트 | 67.4 | +1.16 | 실측 | [[apex-agents]] 47.0%×1.0, [[gdpval]] 42.0%×1.0, [[itbench]] 40.0%×1.0, [[tau2-bench]] 95.0%×1.0, [[tau3-banking]] 25.0%×1.0, [[terminal-bench]] 41.0%×1.0 |
| 신뢰성 | 55.3 | +0.35 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 69.0 | +1.27 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 62.1 | +0.81 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 64.5 | +0.97 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
