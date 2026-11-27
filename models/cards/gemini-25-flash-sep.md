---
type: Model
title: Gemini 2.5 Flash (Sep)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.4, z: 0.32, r: 54.8, estimated: false }  # 전문 지식
  reasoning: { s: 32.9, z: -0.11, r: 48.3, estimated: false }  # 추론
  coding: { s: 25.3, z: -0.53, r: 42.0, estimated: false }  # 코딩
  agentic: { s: 35.7, z: -0.41, r: 43.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.2, z: 0.35, r: 55.2, estimated: false }  # 멀티모달
  long_context: { s: 80.1, z: 0.69, r: 60.3, estimated: false }  # 긴문맥
  instruction: { s: 56.4, z: 0.25, r: 53.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Gemini 2.5 Flash (Sep)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.8 | +0.32 | 실측 | [[gpqa-diamond]] 79.2929%×0.4, [[humanitys-last-exam]] 13.8091%×0.3 |
| 추론 | 48.3 | -0.11 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 79.2929%×1.0, [[humanitys-last-exam]] 13.8091%×1.0 |
| 코딩 | 42.0 | -0.53 | 실측 | [[terminal-bench]] 16.6667%×0.5 |
| 에이전트 | 43.9 | -0.41 | 실측 | [[tau2-bench]] 45.614%×1.0, [[terminal-bench]] 16.6667%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.2 | +0.35 | 실측 | [[mmmu-pro]] 73.1214%×1.0 |
| 긴문맥 | 60.3 | +0.69 | 실측 | [[aa-lcr]] 71%×1.0 |
| 지시 따르기 | 53.7 | +0.25 | 실측 | [[ifbench]] 52.3129%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
