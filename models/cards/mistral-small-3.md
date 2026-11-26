---
type: Model
title: Mistral Small 3
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.053
output_speed_tps: 61.0525619648008
context_window: 32000
status: past
size_class: Small
params_b: 24
is_reasoning: false
radar:
  knowledge: { s: 25.6, z: -1.03, r: 34.6, estimated: false }  # 전문 지식
  reasoning: { s: 22.9, z: -0.61, r: 40.8, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: 19.8, z: -0.96, r: 35.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 20.1, z: -1.26, r: 31.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Mistral Small 3

Mistral · Open · Small(24B) · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.05 · 출력 $0.08 · 혼합 $0.053/1M · 61.0525619648008 t/s · TTFT 0.552126063933504s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 34.6 | -1.03 | 실측 | [[gpqa-diamond]] 46.1616%×0.4, [[humanitys-last-exam]] 3.76%×0.3 |
| 추론 | 40.8 | -0.61 | 실측 | [[gpqa-diamond]] 46.1616%×1.0, [[humanitys-last-exam]] 3.76%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | 35.5 | -0.96 | 실측 | [[tau2-bench]] 19.5906%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 31.1 | -1.26 | 실측 | [[ifbench]] 26.3946%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
