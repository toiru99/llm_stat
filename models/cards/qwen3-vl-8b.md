---
type: Model
title: Qwen3 VL 8B
creator: Alibaba
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.37
output_speed_tps: 112.0
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.8, z: -0.37, r: 44.5, estimated: false }  # 전문 지식
  reasoning: { s: 20.3, z: -0.69, r: 39.6, estimated: false }  # 추론
  coding: { s: 26.5, z: -0.83, r: 37.6, estimated: false }  # 코딩
  agentic: { s: 14.6, z: -0.84, r: 37.4, estimated: false }  # 에이전트
  trust: { s: 9.4, z: -0.87, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: 60.9, z: -0.5, r: 42.4, estimated: false }  # 멀티모달
  long_context: { s: 40.8, z: -0.22, r: 46.6, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.53, r: 42.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-12
timestamp: 2026-07-12T00:00:00Z
---

# Qwen3 VL 8B

Alibaba · Open · Unknown · 컨텍스트 256k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.18 · 출력 $2.1 · 혼합 $0.37/1M · 112.0 t/s · TTFT 2.4s · 256k ctx` · 가성비 29.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.5 | -0.37 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 58.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 39.6 | -0.69 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 58.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 37.6 | -0.83 | 실측 | [[scicode]] 22.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 37.4 | -0.84 | 실측 | [[tau2-bench]] 23.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 37.0 | -0.87 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 42.4 | -0.5 | 실측 | [[mmmu-pro]] 57.0%×1.0 |
| 긴문맥 | 46.6 | -0.22 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 42.0 | -0.53 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
