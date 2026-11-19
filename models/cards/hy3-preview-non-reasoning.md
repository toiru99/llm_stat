---
type: Model
title: Hy3-preview (non-reasoning)
creator: Tencent
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0483
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 45.4, z: -0.09, r: 48.6, estimated: false }  # 전문 지식
  reasoning: { s: 27.4, z: -0.4, r: 43.9, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.28, r: 54.2, estimated: false }  # 코딩
  agentic: { s: 58.2, z: 0.46, r: 56.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.4, z: -0.19, r: 47.2, estimated: false }  # 긴문맥
  instruction: { s: 50.3, z: -0.15, r: 47.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hy3-preview (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Hy3-preview (non-reasoning)

Tencent · Open · Large · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $0.063 · 출력 $0.21 · 혼합 $0.0483/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.6 | -0.09 | 실측 | [[gpqa-diamond]] 73.23232323232321%×0.4, [[humanitys-last-exam]] 6.95088044485635%×0.3 |
| 추론 | 43.9 | -0.4 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 73.23232323232321%×1.0, [[humanitys-last-exam]] 6.95088044485635%×1.0 |
| 코딩 | 54.2 | +0.28 | 실측 | [[terminal-bench]] 31.818181818181802%×0.5 |
| 에이전트 | 56.9 | +0.46 | 실측 | [[tau2-bench]] 67.5438596491228%×1.0, [[terminal-bench]] 31.818181818181802%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.2 | -0.19 | 실측 | [[aa-lcr]] 42.0%×1.0 |
| 지시 따르기 | 47.8 | -0.15 | 실측 | [[ifbench]] 47.959183673469404%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
