---
type: Model
title: Llama 3.2 3B
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Tiny
params_b: 3
is_reasoning: false
radar:
  knowledge: { s: 12.9, z: -1.65, r: 25.3, estimated: false }  # 전문 지식
  reasoning: { s: 12.0, z: -1.15, r: 32.7, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: 21.2, z: -0.91, r: 36.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 4.9, z: -1.62, r: 25.7, estimated: false }  # 긴문맥
  instruction: { s: 19.8, z: -1.28, r: 30.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.2 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Llama 3.2 3B

Meta · Open · Tiny(3B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 25.3 | -1.65 | 실측 | [[gpqa-diamond]] 25.4545%×0.4, [[humanitys-last-exam]] 5.35%×0.3 |
| 추론 | 32.7 | -1.15 | 실측 | [[gpqa-diamond]] 25.4545%×1.0, [[humanitys-last-exam]] 5.35%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | 36.3 | -0.91 | 실측 | [[tau2-bench]] 21.0526%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 25.7 | -1.62 | 실측 | [[aa-lcr]] 4.33333%×1.0 |
| 지시 따르기 | 30.9 | -1.28 | 실측 | [[ifbench]] 26.1905%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
