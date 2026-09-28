---
type: Model
title: Gemini 3.5 Flash
creator: Google
license: Proprietary
intelligence_index: 33.0
price_blended_usd_1m: 1.305
output_speed_tps: 204.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 79.6, z: 1.79, r: 76.9, estimated: false }  # 전문 지식
  reasoning: { s: 68.7, z: 1.55, r: 73.3, estimated: false }  # 추론
  coding: { s: 72.9, z: 1.31, r: 69.7, estimated: false }  # 코딩
  agentic: { s: 73.7, z: 1.38, r: 70.7, estimated: false }  # 에이전트
  trust: { s: 37.1, z: 0.53, r: 58.0, estimated: false }  # 신뢰성
  multimodal: { s: 94.5, z: 1.21, r: 68.2, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 0.96, r: 64.4, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.51, r: 72.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# Gemini 3.5 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **33.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.305/1M · 204.0 t/s · TTFT 28.22s · 1M ctx` · 가성비 25.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.9 | +1.79 | 실측 | [[aa-omniscience]] 51.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 73.3 | +1.55 | 실측 | [[critpt]] 13.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 69.7 | +1.31 | 실측 | [[scicode]] 54.0%×1.0, [[terminal-bench]] 41.0%×0.5 |
| 에이전트 | 70.7 | +1.38 | 실측 | [[apex-agents]] 47.0%×1.0, [[gdpval]] 34.0%×1.0, [[itbench]] 40.0%×1.0, [[tau2-bench]] 95.0%×1.0, [[tau3-banking]] 32.0%×1.0, [[terminal-bench]] 41.0%×1.0 |
| 신뢰성 | 58.0 | +0.53 | 실측 | [[aa-omniscience]] 38.0%×1.0 |
| 멀티모달 | 68.2 | +1.21 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 64.4 | +0.96 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 72.7 | +1.51 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
