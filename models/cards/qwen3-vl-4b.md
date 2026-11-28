---
type: Model
title: Qwen3 VL 4B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Tiny
params_b: 4.4
is_reasoning: false
radar:
  knowledge: { s: 19.5, z: -1.33, r: 30.1, estimated: false }  # 전문 지식
  reasoning: { s: 11.7, z: -1.17, r: 32.5, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 11.8, z: -1.25, r: 31.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 39.2, z: -1.65, r: 25.3, estimated: false }  # 멀티모달
  long_context: { s: 15.8, z: -1.28, r: 30.7, estimated: false }  # 긴문맥
  instruction: { s: 27.7, z: -0.95, r: 35.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Qwen3 VL 4B

Alibaba · Open · Tiny(4.4B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 30.1 | -1.33 | 실측 | [[gpqa-diamond]] 37.0707%×0.4, [[humanitys-last-exam]] 3.61446%×0.3 |
| 추론 | 32.5 | -1.17 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 37.0707%×1.0, [[humanitys-last-exam]] 3.61446%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 31.3 | -1.25 | 실측 | [[tau2-bench]] 23.3918%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 25.3 | -1.65 | 실측 | [[mmmu-pro]] 43.8728%×1.0 |
| 긴문맥 | 30.7 | -1.28 | 실측 | [[aa-lcr]] 14%×1.0 |
| 지시 따르기 | 35.8 | -0.95 | 실측 | [[ifbench]] 31.8367%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
