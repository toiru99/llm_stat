---
type: Model
title: Devstral Small
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Small
params_b: 24
is_reasoning: false
radar:
  knowledge: { s: 22.5, z: -1.18, r: 32.3, estimated: false }  # 전문 지식
  reasoning: { s: 13.4, z: -1.08, r: 33.8, estimated: false }  # 추론
  coding: { s: 9.2, z: -1.07, r: 33.9, estimated: false }  # 코딩
  agentic: { s: 18.9, z: -1.0, r: 35.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 21.1, z: -1.12, r: 33.2, estimated: false }  # 긴문맥
  instruction: { s: 31.5, z: -0.79, r: 38.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral Small
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Devstral Small

Mistral · Open · Small(24B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 32.3 | -1.18 | 실측 | [[gpqa-diamond]] 41.4141%×0.4, [[humanitys-last-exam]] 3.75348%×0.3 |
| 추론 | 33.8 | -1.08 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 41.4141%×1.0, [[humanitys-last-exam]] 3.75348%×1.0 |
| 코딩 | 33.9 | -1.07 | 실측 | [[terminal-bench]] 6.06061%×0.5 |
| 에이전트 | 35.1 | -1.0 | 실측 | [[tau2-bench]] 28.3626%×1.0, [[terminal-bench]] 6.06061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.2 | -1.12 | 실측 | [[aa-lcr]] 18.6667%×1.0 |
| 지시 따르기 | 38.2 | -0.79 | 실측 | [[ifbench]] 34.5578%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
