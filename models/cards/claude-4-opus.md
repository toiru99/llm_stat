---
type: Model
title: Claude 4 Opus
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 11.55
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.7, z: 0.29, r: 54.3, estimated: false }  # 전문 지식
  reasoning: { s: 48.1, z: 0.64, r: 59.6, estimated: false }  # 추론
  coding: { s: 47.1, z: 0.2, r: 53.1, estimated: false }  # 코딩
  agentic: { s: 60.6, z: 0.47, r: 57.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.2, z: 0.63, r: 59.4, estimated: false }  # 긴문맥
  instruction: { s: 58.5, z: 0.33, r: 55.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Opus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Claude 4 Opus

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 긴문맥
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $15.0 · 출력 $75.0 · 혼합 $11.55/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.3 | +0.29 | 실측 | [[gpqa-diamond]] 79.596%×0.4, [[humanitys-last-exam]] 12.3262%×0.3 |
| 추론 | 59.6 | +0.64 | 실측 | [[gpqa-diamond]] 79.596%×1.0, [[humanitys-last-exam]] 12.3262%×1.0 |
| 코딩 | 53.1 | +0.2 | 실측 | [[terminal-bench]] 31.0606%×0.5 |
| 에이전트 | 57.1 | +0.47 | 실측 | [[tau2-bench]] 73.3918%×1.0, [[terminal-bench]] 31.0606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.4 | +0.63 | 실측 | [[aa-lcr]] 69.3333%×1.0 |
| 지시 따르기 | 55.0 | +0.33 | 실측 | [[ifbench]] 53.7415%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
