---
type: Model
title: Gemini 2.5 Flash-Lite (Sep) (non-reasoning)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.067
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.9, z: -0.38, r: 44.2, estimated: false }  # 전문 지식
  reasoning: { s: 23.1, z: -0.6, r: 41.0, estimated: false }  # 추론
  coding: { s: 11.5, z: -1.0, r: 35.0, estimated: false }  # 코딩
  agentic: { s: 21.1, z: -0.92, r: 36.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 65.2, z: -0.32, r: 45.3, estimated: false }  # 멀티모달
  long_context: { s: 56.0, z: -0.05, r: 49.2, estimated: false }  # 긴문맥
  instruction: { s: 41.7, z: -0.36, r: 44.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash-Lite (Sep) (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Gemini 2.5 Flash-Lite (Sep) (non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 44.2 | -0.38 | 실측 | [[gpqa-diamond]] 65.0505%×0.4, [[humanitys-last-exam]] 5.09731%×0.3 |
| 추론 | 41.0 | -0.6 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 65.0505%×1.0, [[humanitys-last-exam]] 5.09731%×1.0 |
| 코딩 | 35.0 | -1.0 | 실측 | [[terminal-bench]] 7.57576%×0.5 |
| 에이전트 | 36.2 | -0.92 | 실측 | [[tau2-bench]] 30.4094%×1.0, [[terminal-bench]] 7.57576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 45.3 | -0.32 | 실측 | [[mmmu-pro]] 63.4104%×1.0 |
| 긴문맥 | 49.2 | -0.05 | 실측 | [[aa-lcr]] 49.6667%×1.0 |
| 지시 따르기 | 44.6 | -0.36 | 실측 | [[ifbench]] 41.8367%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
