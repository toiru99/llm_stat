---
type: Model
title: Gemini 2.5 Flash-Lite (Sep)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.067
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.8, z: -0.14, r: 47.9, estimated: false }  # 전문 지식
  reasoning: { s: 26.2, z: -0.44, r: 43.4, estimated: false }  # 추론
  coding: { s: 19.5, z: -0.73, r: 39.1, estimated: false }  # 코딩
  agentic: { s: 25.3, z: -0.77, r: 38.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 67.3, z: -0.21, r: 46.9, estimated: false }  # 멀티모달
  long_context: { s: 72.9, z: 0.47, r: 57.0, estimated: false }  # 긴문맥
  instruction: { s: 56.8, z: 0.27, r: 54.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash-Lite (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Gemini 2.5 Flash-Lite (Sep)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 47.9 | -0.14 | 실측 | [[gpqa-diamond]] 70.9091%×0.4, [[humanitys-last-exam]] 6.95088%×0.3 |
| 추론 | 43.4 | -0.44 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 70.9091%×1.0, [[humanitys-last-exam]] 6.95088%×1.0 |
| 코딩 | 39.1 | -0.73 | 실측 | [[terminal-bench]] 12.8788%×0.5 |
| 에이전트 | 38.4 | -0.77 | 실측 | [[tau2-bench]] 30.7018%×1.0, [[terminal-bench]] 12.8788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 46.9 | -0.21 | 실측 | [[mmmu-pro]] 64.9711%×1.0 |
| 긴문맥 | 57.0 | +0.47 | 실측 | [[aa-lcr]] 64.6667%×1.0 |
| 지시 따르기 | 54.0 | +0.27 | 실측 | [[ifbench]] 52.585%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
