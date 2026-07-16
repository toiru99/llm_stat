---
type: Model
title: Qwen3 VL 32B
creator: Alibaba
license: Open
intelligence_index: 18.0
price_blended_usd_1m: 1.47
output_speed_tps: 89.0
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.4, z: -0.2, r: 47.0, estimated: false }  # 전문 지식
  reasoning: { s: 30.8, z: -0.15, r: 47.8, estimated: false }  # 추론
  coding: { s: 35.2, z: -0.47, r: 43.0, estimated: false }  # 코딩
  agentic: { s: 29.3, z: -0.27, r: 46.0, estimated: false }  # 에이전트
  trust: { s: 22.4, z: -0.26, r: 46.1, estimated: false }  # 신뢰성
  multimodal: { s: 69.6, z: -0.09, r: 48.6, estimated: false }  # 멀티모달
  long_context: { s: 72.4, z: 0.71, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: 0.57, r: 58.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-16
timestamp: 2026-07-16T00:00:00Z
---

# Qwen3 VL 32B

Alibaba · Open · Unknown · 컨텍스트 256k · 종합지능 **18.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.7 · 출력 $8.4 · 혼합 $1.47/1M · 89.0 t/s · TTFT 2.65s · 256k ctx` · 가성비 12.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.0 | -0.2 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 47.8 | -0.15 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 43.0 | -0.47 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 46.0 | -0.27 | 실측 | [[tau2-bench]] 46.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 46.1 | -0.26 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | 48.6 | -0.09 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 60.6 | +0.71 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 58.6 | +0.57 | 실측 | [[ifbench]] 59.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
