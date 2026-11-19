---
type: Model
title: Gemini 2.5 Flash-Lite (non-reasoning)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.067
output_speed_tps: 312.220327351158
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.4, z: -1.01, r: 34.8, estimated: false }  # 전문 지식
  reasoning: { s: 15.7, z: -0.98, r: 35.3, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.24, r: 31.4, estimated: false }  # 코딩
  agentic: { s: 11.3, z: -1.16, r: 32.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 52.7, z: -0.96, r: 35.6, estimated: false }  # 멀티모달
  long_context: { s: 36.1, z: -0.52, r: 42.2, estimated: false }  # 긴문맥
  instruction: { s: 27.2, z: -1.11, r: 33.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash-Lite (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Gemini 2.5 Flash-Lite (non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · 312.220327351158 t/s · TTFT 0.362772885263817s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.8 | -1.01 | 실측 | [[gpqa-diamond]] 47.3737373737374%×0.4, [[humanitys-last-exam]] 3.66079703429101%×0.3 |
| 추론 | 35.3 | -0.98 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 47.3737373737374%×1.0, [[humanitys-last-exam]] 3.66079703429101%×1.0 |
| 코딩 | 31.4 | -1.24 | 실측 | [[terminal-bench]] 2.27272727272727%×0.5 |
| 에이전트 | 32.6 | -1.16 | 실측 | [[tau2-bench]] 19.0058479532164%×1.0, [[terminal-bench]] 2.27272727272727%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 35.6 | -0.96 | 실측 | [[mmmu-pro]] 53.9884393063584%×1.0 |
| 긴문맥 | 42.2 | -0.52 | 실측 | [[aa-lcr]] 32.0%×1.0 |
| 지시 따르기 | 33.3 | -1.11 | 실측 | [[ifbench]] 31.496598639455797%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
