---
type: Model
title: Qwen3.6 Plus
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.435
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.4, z: 0.99, r: 64.8, estimated: false }  # 전문 지식
  reasoning: { s: 63.6, z: 1.0, r: 64.9, estimated: false }  # 추론
  coding: { s: 66.6, z: 0.97, r: 64.5, estimated: false }  # 코딩
  agentic: { s: 53.4, z: 0.63, r: 59.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.1, z: 0.69, r: 60.4, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.06, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 88.6, z: 1.54, r: 73.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Qwen3.6 Plus

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.8 | +0.99 | 실측 | [[gpqa-diamond]] 88.2%×0.4, [[humanitys-last-exam]] 27.8%×0.3 |
| 추론 | 64.9 | +1.0 | 실측 | [[gpqa-diamond]] 88.2%×1.0, [[humanitys-last-exam]] 27.8%×1.0 |
| 코딩 | 64.5 | +0.97 | 실측 | [[terminal-bench]] 43.9%×0.5 |
| 에이전트 | 59.5 | +0.63 | 실측 | [[gdpval]] 997.0%×1.0, [[tau3-banking]] 20.8%×1.0, [[terminal-bench]] 43.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.4 | +0.69 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 65.8 | +1.06 | 실측 | [[aa-lcr]] 78.3%×1.0 |
| 지시 따르기 | 73.1 | +1.54 | 실측 | [[ifbench]] 75.2%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
