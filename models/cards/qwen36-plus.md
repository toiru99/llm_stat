---
type: Model
title: Qwen3.6 Plus
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.435
output_speed_tps: 52.0124687711819
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.5, z: 0.97, r: 64.6, estimated: false }  # 전문 지식
  reasoning: { s: 45.1, z: 0.47, r: 57.0, estimated: false }  # 추론
  coding: { s: 66.7, z: 0.9, r: 63.5, estimated: false }  # 코딩
  agentic: { s: 66.8, z: 0.76, r: 61.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.7, z: 0.68, r: 60.2, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.03, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 88.5, z: 1.45, r: 71.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Qwen3.6 Plus

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 52.0124687711819 t/s · TTFT 2.36762775893344s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.6 | +0.97 | 실측 | [[gpqa-diamond]] 88.1818181818182%×0.4, [[humanitys-last-exam]] 27.8498609823911%×0.3 |
| 추론 | 57.0 | +0.47 | 실측 | [[critpt]] 2.85714285714286%×1.0, [[gpqa-diamond]] 88.1818181818182%×1.0, [[humanitys-last-exam]] 27.8498609823911%×1.0 |
| 코딩 | 63.5 | +0.9 | 실측 | [[terminal-bench]] 43.9393939393939%×0.5 |
| 에이전트 | 61.4 | +0.76 | 실측 | [[gdpval]] 996.56%×1.0, [[tau2-bench]] 97.6608187134503%×1.0, [[tau3-banking]] 20.8247422680412%×1.0, [[terminal-bench]] 43.9393939393939%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.2 | +0.68 | 실측 | [[mmmu-pro]] 77.9768786127168%×1.0 |
| 긴문맥 | 65.4 | +1.03 | 실측 | [[aa-lcr]] 78.3333333333333%×1.0 |
| 지시 따르기 | 71.7 | +1.45 | 실측 | [[ifbench]] 75.1700680272109%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
