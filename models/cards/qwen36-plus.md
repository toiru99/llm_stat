---
type: Model
title: Qwen3.6 Plus
creator: Alibaba
license: Proprietary
intelligence_index: 27.0
price_blended_usd_1m: 0.435
output_speed_tps: 57.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.1, z: 0.49, r: 57.4, estimated: false }  # 전문 지식
  reasoning: { s: 48.4, z: 0.6, r: 59.0, estimated: false }  # 추론
  coding: { s: 66.7, z: 1.1, r: 66.5, estimated: false }  # 코딩
  agentic: { s: 60.7, z: 0.88, r: 63.3, estimated: false }  # 에이전트
  trust: { s: 64.9, z: 1.84, r: 77.6, estimated: false }  # 신뢰성
  multimodal: { s: 86.3, z: 0.8, r: 62.0, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.13, r: 66.9, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 1.46, r: 72.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Qwen3.6 Plus

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **27.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 57.0 t/s · TTFT 2.06s · 1M ctx` · 가성비 62.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.4 | +0.49 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 59.0 | +0.6 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 66.5 | +1.1 | 실측 | [[terminal-bench]] 44.0%×0.5 |
| 에이전트 | 63.3 | +0.88 | 실측 | [[gdpval]] 24.0%×1.0, [[tau2-bench]] 98.0%×1.0, [[tau3-banking]] 21.0%×1.0, [[terminal-bench]] 44.0%×1.0 |
| 신뢰성 | 77.6 | +1.84 | 실측 | [[aa-omniscience]] 65.0%×1.0 |
| 멀티모달 | 62.0 | +0.8 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 66.9 | +1.13 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 72.0 | +1.46 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
