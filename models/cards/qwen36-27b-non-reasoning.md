---
type: Model
title: Qwen3.6 27B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.9
output_speed_tps: 59.0
context_window: 262000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 58.5, z: 0.4, r: 56.0, estimated: false }  # 전문 지식
  reasoning: { s: 54.1, z: 0.37, r: 55.6, estimated: false }  # 추론
  coding: { s: 31.8, z: -0.18, r: 47.3, estimated: false }  # 코딩
  agentic: { s: 33.8, z: -0.01, r: 49.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.1, z: 0.3, r: 54.5, estimated: false }  # 멀티모달
  long_context: { s: 75.3, z: 0.69, r: 60.3, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.2, r: 47.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 27B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Qwen3.6 27B (non-reasoning)

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 59.0 t/s · TTFT 3.62s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.0 | +0.4 | 실측 | [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 55.6 | +0.37 | 실측 | [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 47.3 | -0.18 | 실측 | [[terminal-bench]] 21.0%×0.5 |
| 에이전트 | 49.8 | -0.01 | 실측 | [[gdpval]] 969.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 21.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.5 | +0.3 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 60.3 | +0.69 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 47.0 | -0.2 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
