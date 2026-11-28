---
type: Model
title: Phi-3 Mini
creator: Microsoft
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 4096
status: past
size_class: Tiny
params_b: 3.8
is_reasoning: false
radar:
  knowledge: { s: 16.9, z: -1.45, r: 28.2, estimated: false }  # 전문 지식
  reasoning: { s: 15.5, z: -0.98, r: 35.3, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.66, r: 25.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: 16.5, z: -1.41, r: 28.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-3 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Phi-3 Mini

Microsoft · Open · Tiny(3.8B) · 컨텍스트 4k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 28.2 | -1.45 | 실측 | [[gpqa-diamond]] 31.9192%×0.4, [[humanitys-last-exam]] 4.96%×0.3 |
| 추론 | 35.3 | -0.98 | 실측 | [[gpqa-diamond]] 31.9192%×1.0, [[humanitys-last-exam]] 4.96%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 25.1 | -1.66 | 실측 | [[tau2-bench]] 0%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | 28.8 | -1.41 | 실측 | [[ifbench]] 23.8776%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
