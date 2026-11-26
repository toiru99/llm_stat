---
type: Model
title: Gemini 2.5 Flash (Sep) (non-reasoning)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 48.6, z: 0.09, r: 51.3, estimated: false }  # 전문 지식
  reasoning: { s: 29.2, z: -0.29, r: 45.6, estimated: false }  # 추론
  coding: { s: 21.8, z: -0.65, r: 40.3, estimated: false }  # 코딩
  agentic: { s: 25.2, z: -0.77, r: 38.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.3, z: 0.15, r: 52.2, estimated: false }  # 멀티모달
  long_context: { s: 67.7, z: 0.31, r: 54.6, estimated: false }  # 긴문맥
  instruction: { s: 44.1, z: -0.26, r: 46.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash (Sep) (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Gemini 2.5 Flash (Sep) (non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 51.3 | +0.09 | 실측 | [[gpqa-diamond]] 76.5657%×0.4, [[humanitys-last-exam]] 8.71177%×0.3 |
| 추론 | 45.6 | -0.29 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 76.5657%×1.0, [[humanitys-last-exam]] 8.71177%×1.0 |
| 코딩 | 40.3 | -0.65 | 실측 | [[terminal-bench]] 14.3939%×0.5 |
| 에이전트 | 38.4 | -0.77 | 실측 | [[tau2-bench]] 28.3626%×1.0, [[terminal-bench]] 14.3939%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.2 | +0.15 | 실측 | [[mmmu-pro]] 70.2312%×1.0 |
| 긴문맥 | 54.6 | +0.31 | 실측 | [[aa-lcr]] 60%×1.0 |
| 지시 따르기 | 46.1 | -0.26 | 실측 | [[ifbench]] 43.5374%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
