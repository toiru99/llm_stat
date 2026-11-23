---
type: Model
title: Qwen3 VL 8B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 22.7, z: -1.19, r: 32.2, estimated: false }  # 전문 지식
  reasoning: { s: 13.4, z: -1.09, r: 33.6, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.24, r: 31.4, estimated: false }  # 코딩
  agentic: { s: 16.5, z: -0.98, r: 35.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 43.8, z: -1.41, r: 28.9, estimated: false }  # 멀티모달
  long_context: { s: 18.8, z: -1.03, r: 34.5, estimated: false }  # 긴문맥
  instruction: { s: 28.4, z: -1.07, r: 34.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Qwen3 VL 8B

Alibaba · Open · Small · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.2 | -1.19 | 실측 | [[gpqa-diamond]] 42.727272727272705%×0.4, [[humanitys-last-exam]] 2.68767377201112%×0.3 |
| 추론 | 33.6 | -1.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 42.727272727272705%×1.0, [[humanitys-last-exam]] 2.68767377201112%×1.0 |
| 코딩 | 31.4 | -1.24 | 실측 | [[terminal-bench]] 2.27272727272727%×0.5 |
| 에이전트 | 35.2 | -0.98 | 실측 | [[tau2-bench]] 29.2397660818713%×1.0, [[terminal-bench]] 2.27272727272727%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 28.9 | -1.41 | 실측 | [[mmmu-pro]] 47.3410404624277%×1.0 |
| 긴문맥 | 34.5 | -1.03 | 실측 | [[aa-lcr]] 16.6666666666667%×1.0 |
| 지시 따르기 | 34.0 | -1.07 | 실측 | [[ifbench]] 32.312925170068%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
