---
type: Model
title: Gemini 3.8 Flash (low)
creator: Google
license: Proprietary
intelligence_index: 22.497797187349
price_blended_usd_1m: 0.5775
output_speed_tps: 92.1188365406449
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.4, z: 1.39, r: 70.9, estimated: false }  # 전문 지식
  reasoning: { s: 51.8, z: 0.83, r: 62.4, estimated: false }  # 추론
  coding: { s: 79.0, z: 1.28, r: 69.2, estimated: false }  # 코딩
  agentic: { s: 70.1, z: 0.81, r: 62.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.4, z: 1.12, r: 66.8, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.8 Flash (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Gemini 3.8 Flash (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **22.497797187349** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 92.1188365406449 t/s · TTFT 4.08798046849168s · 1M ctx` · 가성비 39.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 70.9 | +1.39 | 실측 | [[gpqa-diamond]] 92.0202%×0.4, [[humanitys-last-exam]] 37.0714%×0.3 |
| 추론 | 62.4 | +0.83 | 실측 | [[critpt]] 4%×1.0, [[gpqa-diamond]] 92.0202%×1.0, [[humanitys-last-exam]] 37.0714%×1.0 |
| 코딩 | 69.2 | +1.28 | 실측 | [[scicode]] 54.9769%×1.0 |
| 에이전트 | 62.1 | +0.81 | 실측 | [[gdpval]] 1315.08 Elo×1.0, [[tau3-banking]] 33.1959%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.8 | +1.12 | 실측 | [[mmmu-pro]] 84.5087%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 80.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
