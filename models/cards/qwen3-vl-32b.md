---
type: Model
title: Qwen3 VL 32B
creator: Alibaba
license: Open
intelligence_index: 18.0
price_blended_usd_1m: None
output_speed_tps: 87.0
context_window: 256000
status: past
size_class: Small
params_b: 33.4
is_reasoning: true
radar:
  knowledge: { s: 36.4, z: -0.23, r: 46.5, estimated: false }  # 전문 지식
  reasoning: { s: 30.8, z: -0.19, r: 47.2, estimated: false }  # 추론
  coding: { s: 35.2, z: -0.5, r: 42.6, estimated: false }  # 코딩
  agentic: { s: 29.3, z: -0.28, r: 45.8, estimated: false }  # 에이전트
  trust: { s: 21.8, z: -0.29, r: 45.6, estimated: false }  # 신뢰성
  multimodal: { s: 68.6, z: -0.15, r: 47.7, estimated: false }  # 멀티모달
  long_context: { s: 72.4, z: 0.68, r: 60.2, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: 0.54, r: 58.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# Qwen3 VL 32B

Alibaba · Open · Small(33.4B) · 컨텍스트 256k · 종합지능 **18.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 신뢰성, 코딩

## 실용 지표
`입력 $0.7 · 출력 $8.4 · 혼합 $None/1M · 87.0 t/s · TTFT 2.79s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.5 | -0.23 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 47.2 | -0.19 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 42.6 | -0.5 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 45.8 | -0.28 | 실측 | [[tau2-bench]] 46.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 45.6 | -0.29 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | 47.7 | -0.15 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 60.2 | +0.68 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 58.1 | +0.54 | 실측 | [[ifbench]] 59.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
