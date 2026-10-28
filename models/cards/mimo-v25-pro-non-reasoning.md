---
type: Model
title: MiMo-V2.5-Pro (non-reasoning)
creator: Xiaomi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.209
output_speed_tps: 52.0
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 53.9, z: 0.2, r: 52.9, estimated: false }  # 전문 지식
  reasoning: { s: 50.0, z: 0.19, r: 52.9, estimated: false }  # 추론
  coding: { s: 54.5, z: 0.59, r: 58.8, estimated: false }  # 코딩
  agentic: { s: 54.5, z: 0.7, r: 60.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.2, z: -0.15, r: 47.7, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.38, r: 44.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.5-Pro (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# MiMo-V2.5-Pro (non-reasoning)

Xiaomi · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.39 · 출력 $1.17 · 혼합 $0.209/1M · 52.0 t/s · TTFT 1.06s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.9 | +0.2 | 실측 | [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 52.9 | +0.19 | 실측 | [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 58.8 | +0.59 | 실측 | [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 60.5 | +0.7 | 실측 | [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.7 | -0.15 | 실측 | [[aa-lcr]] 42.0%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
