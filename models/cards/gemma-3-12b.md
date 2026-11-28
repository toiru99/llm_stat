---
type: Model
title: Gemma 3 12B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: 51.54374181568315
context_window: 128000
status: past
size_class: Small
params_b: 12.2
is_reasoning: false
radar:
  knowledge: { s: 18.5, z: -1.38, r: 29.4, estimated: false }  # 전문 지식
  reasoning: { s: 11.1, z: -1.19, r: 32.1, estimated: false }  # 추론
  coding: { s: 10.8, z: -1.02, r: 34.7, estimated: false }  # 코딩
  agentic: { s: 3.3, z: -1.54, r: 26.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 30.7, z: -2.08, r: 18.8, estimated: false }  # 멀티모달
  long_context: { s: 9.4, z: -1.48, r: 27.8, estimated: false }  # 긴문맥
  instruction: { s: 34.6, z: -0.66, r: 40.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3 12B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Gemma 3 12B

Google · Open · Small(12.2B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 51.54374181568315 t/s · TTFT 1.91518093383339s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 29.4 | -1.38 | 실측 | [[gpqa-diamond]] 34.9495%×0.4, [[humanitys-last-exam]] 4.21%×0.3 |
| 추론 | 32.1 | -1.19 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 34.9495%×1.0, [[humanitys-last-exam]] 4.21%×1.0 |
| 코딩 | 34.7 | -1.02 | 실측 | [[scicode]] 16.4352%×1.0, [[terminal-bench]] 0.757576%×0.5 |
| 에이전트 | 26.8 | -1.54 | 실측 | [[gdpval]] -401.44 Elo×1.0, [[tau2-bench]] 10.8187%×1.0, [[tau3-banking]] 0.824742%×1.0, [[terminal-bench]] 0.757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 18.8 | -2.08 | 실측 | [[mmmu-pro]] 37.5145%×1.0 |
| 긴문맥 | 27.8 | -1.48 | 실측 | [[aa-lcr]] 8.33333%×1.0 |
| 지시 따르기 | 40.1 | -0.66 | 실측 | [[ifbench]] 36.7347%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
