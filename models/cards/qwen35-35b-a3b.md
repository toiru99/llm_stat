---
type: Model
title: Qwen3.5 35B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.425
output_speed_tps: 115.53089463119886
context_window: 262144
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.1, z: 0.66, r: 60.0, estimated: false }  # 전문 지식
  reasoning: { s: 38.7, z: 0.15, r: 52.3, estimated: false }  # 추론
  coding: { s: 40.2, z: 0.01, r: 50.1, estimated: false }  # 코딩
  agentic: { s: 65.1, z: 0.7, r: 60.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 77.6, z: 0.31, r: 54.7, estimated: false }  # 멀티모달
  long_context: { s: 81.2, z: 0.82, r: 62.3, estimated: false }  # 긴문맥
  instruction: { s: 84.8, z: 1.29, r: 69.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 35B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Qwen3.5 35B A3B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.425/1M · 115.53089463119886 t/s · TTFT 3.6776657131527504s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.0 | +0.66 | 실측 | [[gpqa-diamond]] 84.5454545454545%×0.4, [[humanitys-last-exam]] 21.0379981464319%×0.3 |
| 추론 | 52.3 | +0.15 | 실측 | [[critpt]] 0.857142857142857%×1.0, [[gpqa-diamond]] 84.5454545454545%×1.0, [[humanitys-last-exam]] 21.0379981464319%×1.0 |
| 코딩 | 50.1 | +0.01 | 실측 | [[terminal-bench]] 26.5151515151515%×0.5 |
| 에이전트 | 60.5 | +0.7 | 실측 | [[tau2-bench]] 89.1812865497076%×1.0, [[terminal-bench]] 26.5151515151515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.7 | +0.31 | 실측 | [[mmmu-pro]] 72.6589595375723%×1.0 |
| 긴문맥 | 62.3 | +0.82 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 69.4 | +1.29 | 실측 | [[ifbench]] 72.5170068027211%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
