---
type: Model
title: Qwen3 Omni 30B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.322
output_speed_tps: 85.3413834953859
context_window: 65536
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.3, z: -0.1, r: 48.5, estimated: false }  # 전문 지식
  reasoning: { s: 27.1, z: -0.42, r: 43.8, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.16, r: 32.6, estimated: false }  # 코딩
  agentic: { s: 13.6, z: -1.08, r: 33.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 61.0, z: -0.53, r: 42.0, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.1, estimated: false }  # 긴문맥
  instruction: { s: 43.9, z: -0.42, r: 43.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Omni 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Qwen3 Omni 30B A3B

Alibaba · Open · Small · 컨텍스트 65k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.25 · 출력 $0.97 · 혼합 $0.322/1M · 85.3413834953859 t/s · TTFT 1.16139665576644s · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.5 | -0.1 | 실측 | [[gpqa-diamond]] 72.6262626262626%×0.4, [[humanitys-last-exam]] 7.460611677479149%×0.3 |
| 추론 | 43.8 | -0.42 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 72.6262626262626%×1.0, [[humanitys-last-exam]] 7.460611677479149%×1.0 |
| 코딩 | 32.6 | -1.16 | 실측 | [[terminal-bench]] 3.78787878787879%×0.5 |
| 에이전트 | 33.8 | -1.08 | 실측 | [[tau2-bench]] 21.3450292397661%×1.0, [[terminal-bench]] 3.78787878787879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 42.0 | -0.53 | 실측 | [[mmmu-pro]] 60.2312138728324%×1.0 |
| 긴문맥 | 26.1 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 43.8 | -0.42 | 실측 | [[ifbench]] 43.401360544217695%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
