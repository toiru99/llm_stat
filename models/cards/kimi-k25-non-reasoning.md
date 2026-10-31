---
type: Model
title: Kimi K2.5 (non-reasoning)
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.84
output_speed_tps: 50.0
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.4, z: 0.22, r: 53.3, estimated: false }  # 전문 지식
  reasoning: { s: 50.1, z: 0.2, r: 53.0, estimated: false }  # 추론
  coding: { s: 28.8, z: -0.28, r: 45.8, estimated: false }  # 코딩
  agentic: { s: 28.8, z: -0.19, r: 47.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.5, z: 0.37, r: 55.5, estimated: false }  # 멀티모달
  long_context: { s: 75.3, z: 0.69, r: 60.4, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.32, r: 45.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Kimi K2.5 (non-reasoning)

Kimi · Open · Large · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.6 · 출력 $3.0 · 혼합 $0.84/1M · 50.0 t/s · TTFT 2.26s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.3 | +0.22 | 실측 | [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 53.0 | +0.2 | 실측 | [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 45.8 | -0.28 | 실측 | [[terminal-bench]] 19.0%×0.5 |
| 에이전트 | 47.2 | -0.19 | 실측 | [[terminal-bench]] 19.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.5 | +0.37 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 60.4 | +0.69 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 45.2 | -0.32 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
